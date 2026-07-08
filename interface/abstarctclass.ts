abstract class TakePhoto {
  constructor(
    public burst: number,
    public filter: string,
  ) {}
  abstract clickPic(): void;
  getReelTime(): number {
    return 5;
  }
}

class Camera extends TakePhoto {
  constructor(
    public burst: number,
    public filter: string,
    public isClicked: boolean,
  ) {
    super(burst, filter);
  }
  clickPic() {
    console.log("Picture is clicked successfully");
  }
}

const hetvi = new Camera(3, "rgb", true);

hetvi.clickPic();
hetvi.getReelTime();
export {};
