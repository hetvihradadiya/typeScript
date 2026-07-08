interface userR {
  name: string;
  readonly userId: number;
  isSet: boolean;
  googlId?: string;
  // trialStarted: () => string;
  trialStarted(): string;
  getCoupan(coupanName: string, value: number): number;
}

interface userR {
  githubToken: string;
}

interface Admin extends userR {
  role: "admin" | "ta" | "learner";
}

let hetvii: userR = {
  name: "Hetviiii",
  userId: 123,
  isSet: true,
  trialStarted: () => {
    return "yes!! started";
  },
  getCoupan(name: "patel12", off: 12) {
    return 100 - off;
  },
  githubToken: "github.com",
};

let radhe: Admin = {
  name: "Radhaaa",
  userId: 536,
  isSet: true,
  trialStarted: () => {
    return "started succeccfully";
  },
  getCoupan(name: "123r", off: 25) {
    return 100 - off;
  },
  githubToken: "r/github.com",
  role: "admin",
};
