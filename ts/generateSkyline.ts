import { random } from "./deps.ts";

const xmlns = "http://www.w3.org/2000/svg";
const colors = ["white", "lightgray", "gray", "darkgray", "black"];

const createSVGElement = (
  tag: string,
  attributes?: Record<string, string | number>,
) => {
  const element = document.createElementNS(xmlns, tag);

  if (attributes !== undefined) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value.toString());
    }
  }

  return element;
};

// Windows
const windows: Element[] = [];
const generateWindow = (p: { x: number; y: number; side: number }) => {
  const { x, y, side } = p;
  const window = createSVGElement("rect", {
    class: "window",
    x,
    y,
    height: side,
    width: side,
    fill: random.element(colors),
  });

  windows.push(window);
  return window;
};

// Buildings
const generateBuilding = (
  p: {
    maxX: number;
    ground: number;
    window: { side: number; count: { x: number; y: number } };
  },
) => {
  const { maxX, ground, window: { side, count } } = p;
  const width = side * ((2 * count.x) + 1);
  const height = side * ((2 * count.y) + 1);
  const x = random.int(side, maxX - width - side);
  const y = ground - height;

  const points = [
    { x, y: y + height },
    { x, y },
    { x: x + width, y },
    { x: x + width, y: y + height },
  ];

  const outline = createSVGElement("polyline", {
    class: "building-outline",
    points: points.map(({ x, y }) => `${x},${y}`).join(" "),
  });

  const y1 = y + height;
  const bottom = createSVGElement("line", {
    class: "building-bottom",
    x1: x,
    y1,
    x2: x + width,
    y2: y1,
  });

  const building = createSVGElement("g", {
    class: "building",
  });
  building.append(bottom, outline);

  for (let wx = 0; wx < count.x; wx += 1) {
    for (let wy = 0; wy < count.y; wy += 1) {
      const window = generateWindow({
        x: x + (wx * side * 2) + side,
        y: y + (wy * side * 2) + side,
        side,
      });

      building.append(window);
    }
  }

  return building;
};

// Skyline
const generateSkyline = (p: { width: number; height: number }) => {
  const { width, height } = p;
  const window = Math.ceil(Math.min(width, height) / 75);
  const stroke = width > 700 ? 2 : 1;
  const ground = height - stroke;

  const skyline = createSVGElement("g", {
    "stroke-linejoin": "round",
    "stroke-width": stroke,
    rx: stroke,
  });

  const line = createSVGElement("line", {
    class: "ground",
    x1: 0,
    y1: ground,
    x2: width,
    y2: ground,
  });

  const buildings = createSVGElement("g");

  skyline.append(line, buildings);

  windows.length = 0;

  const buildingMax = Math.floor(width / 100);
  const buildingCount = random.int(1, Math.max(10, buildingMax));

  for (let i = 0; i < buildingCount; i += 1) {
    const windowCountX = random.int(1, Math.floor(width / window / 5));
    const windowCountY = random.int(1, Math.floor(height / window / 2.3));

    const building = generateBuilding({
      maxX: width,
      ground: ground + stroke,
      window: {
        side: window,
        count: {
          x: windowCountX,
          y: windowCountY,
        },
      },
    });

    buildings.append(building);
  }

  return skyline;
};

export { colors, windows };
export default generateSkyline;
