// @user-interface
export interface User {
  username: string;
  email: string;
  password: string;
  displayName: string;
  avatar?: string;
  bio?: string;
  role: 'player' | 'team_manager' | 'tournament_admin' | 'system_admin';
  status: 'active' | 'inactive' | 'banned';
  socialLinks?: {
    twitter?: string;
    twitch?: string;
    discord?: string;
    youtube?: string;
  };
  teamId?: mongoose.Types.ObjectId;
  stats?: {
    totalTournamentsPlayed: number;
    tournamentsWon: number;
    matchesPlayed: number;
    matchesWon: number;
    winRate: number;
  };
  notifications: {
    email: boolean;
    push: boolean;
    discord: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
}
