interface information {
  id: number;
  text: { id: number; title: string }[];
  background: string;
}

export const InformationData: information[] = [
  {
    id: 0,
    text: [
      {
        id: 0,
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi non arcu. Lorem sed risus ultricies tristique nulla aliquet. Fames ac turpis egestas maecenas pharetra convallis posuere morbi.",
      },
      {
        id: 1,
        title:
          "Arcu felis bibendum ut tristique. Vitae elementum curabitur vitae nunc sed. Viverra justo nec ultrices dui sapien. Sed risus ultricies tristique nulla aliquet enim tortor. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Volutpat blandit aliquam etiam erat velit scelerisque in. ",
      },
      {
        id: 2,
        title: "Netus et malesuada fames ac turpis egestas integer.",
      },
      {
        id: 3,
        title:
          "Id neque aliquam vestibulum morbi blandit cursus. Et malesuada fames ac turpis egestas. Pellentesque dignissim enim sit amet.",
      },
      {
        id: 4,
        title:
          "Turpis egestas sed tempus urna et pharetra. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Pellentesque dignissim enim sit amet venenatis urna.",
      },
      {
        id: 5,
        title:
          "Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Gravida rutrum quisque non tellus orci ac. Porttitor lacus luctus accumsan tortor posuere ac ut.",
      },
    ],
    background: "/public/blog/information/bg.png",
  },
  {
    id: 1,
    text: [
      {
        id: 0,
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi non arcu. Lorem sed risus ultricies tristique nulla aliquet. Fames ac turpis egestas maecenas pharetra convallis posuere morbi.",
      },
      {
        id: 1,
        title:
          "Arcu felis bibendum ut tristique. Vitae elementum curabitur vitae nunc sed. Viverra justo nec ultrices dui sapien. Sed risus ultricies tristique nulla aliquet enim tortor. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Volutpat blandit aliquam etiam erat velit scelerisque in. ",
      },
      {
        id: 2,
        title: "Netus et malesuada fames ac turpis egestas integer.",
      },
      {
        id: 3,
        title:
          "Id neque aliquam vestibulum morbi blandit cursus. Et malesuada fames ac turpis egestas. Pellentesque dignissim enim sit amet.",
      },
      {
        id: 4,
        title:
          "Turpis egestas sed tempus urna et pharetra. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Pellentesque dignissim enim sit amet venenatis urna.",
      },
      {
        id: 5,
        title:
          "Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Gravida rutrum quisque non tellus orci ac. Porttitor lacus luctus accumsan tortor posuere ac ut.",
      },
    ],
    background: "/public/blog/information/bg.png",
  },
];

interface text {
  id: number;
  title: string;
}

export const DescriptionData: text[] = [
  {
    id: 0,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor morbi non arcu. Lorem sed risus ultricies tristique nulla aliquet. Fames ac turpis egestas maecenas pharetra convallis posuere morbi.",
  },
  {
    id: 1,
    title:
      "Arcu felis bibendum ut tristique. Vitae elementum curabitur vitae nunc sed. Viverra justo nec ultrices dui sapien. Sed risus ultricies tristique nulla aliquet enim tortor. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Volutpat blandit aliquam etiam erat velit scelerisque in. ",
  },
  {
    id: 2,
    title: "Netus et malesuada fames ac turpis egestas integer.",
  },
  {
    id: 3,
    title:
      "Id neque aliquam vestibulum morbi blandit cursus. Et malesuada fames ac turpis egestas. Pellentesque dignissim enim sit amet.",
  },
  {
    id: 4,
    title:
      "Turpis egestas sed tempus urna et pharetra. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Pellentesque dignissim enim sit amet venenatis urna.",
  },
  {
    id: 5,
    title:
      "Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Gravida rutrum quisque non tellus orci ac. Porttitor lacus luctus accumsan tortor posuere ac ut.",
  },
];

interface slider {
  id: number;
  bg: string;
}

export const SliderData: slider[] = [
  {
    id: 0,
    bg: "/public/home/hero/background_first.jpg",
  },
  {
    id: 1,
    bg: "/public/home/hero/background_second.jpg",
  },
];
