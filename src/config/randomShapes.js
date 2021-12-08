// THIS FUNCTION IS USED TO GENERATE RANDOM BLOB SHAPE AND FRAMES FOR BLOB ANIMATION

const generateBorder = (s1, s2) => {
  return `${s2 + Math.ceil(Math.random() * (s1 - s2))}%`;
};

const createPoints = () => {
  const f1 = generateBorder(40, 33);
  const f2 = generateBorder(67, 60);
  const f3 = generateBorder(64, 42);
  const f4 = generateBorder(58, 30);
  const f5 = generateBorder(64, 30);
  const f6 = generateBorder(65, 30);
  const f7 = generateBorder(70, 35);
  const f8 = generateBorder(70, 36);

  return `${f1} ${f2} ${f3} ${f4} / ${f5} ${f6} ${f7} ${f8}`;
};

const createKeyFrames = () => {
  const frames = [];

  for (let i = 0; i < 5; i += 1) {
    frames.push(createPoints());
  }

  return frames;
};
