const splitProps = (props, keys) => {
  const matchedProps = {};
  const remainingProps = {};
  const propKeys = Object.keys(props);

  for (let i = 0; i < propKeys.length; i++) {
    const propKey = propKeys[i];
    const propValue = props[propKey];

    if (keys.includes(propKey)) {
      matchedProps[propKey] = propValue;
    } else {
      remainingProps[propKey] = propValue;
    }
  }

  return { matchedProps, remainingProps };
};

export default splitProps;
