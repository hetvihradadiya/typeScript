interface photoShoot {
  name: string;
  userID: number;
  filter: string;
}

interface story {
  likedStory(): void;
}

class Camera implements photoShoot, story {
  constructor(
    public name: string,
    public userID: number,
    public filter: string,
  ) {}

  likedStory() {
    console.log("Yess!!! it's been liked");
  }
}


export {}