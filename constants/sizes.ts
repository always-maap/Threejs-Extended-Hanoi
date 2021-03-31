export const PLATFORM_ARGS = {
  width: 20,
  height: 0.5,
  depth: 3,
};

export const RING = {
  outer_radius: 0.25,
  depth: 0.25,
};

export const PEG_ARGS = {
  radius_top: 0.25,
  radius_bottom: 0.25,
  height: 7,
  radius_segments: 64,
  space_between: 7,
};

export const PEGS = {
  right: {
    width: PEG_ARGS.space_between,
    height: PEG_ARGS.height / 2 + PLATFORM_ARGS.height,
    depth: 0,
  },
  middle: {
    width: 0,
    height: PEG_ARGS.height / 2 + PLATFORM_ARGS.height,
    depth: 0,
  },
  left: {
    width: -PEG_ARGS.space_between,
    height: PEG_ARGS.height / 2 + PLATFORM_ARGS.height,
    depth: 0,
  },
};
