declare namespace State {
  interface Root {
    router: Type.RouterRootState;
    layouts: Layouts;
    profile: Profile;
    stepData: StepData;
    settings: Settings;
    user: User;
    userRequests: UserRequests;
  }

  type Layouts = Layouts.Root;
  type Profile = Profile.Root;
  type StepData = StepData.Root;
  type User = User.Root;
  type Settings = Settings.Root;
  type UserRequests = UserRequests.Root;
}
