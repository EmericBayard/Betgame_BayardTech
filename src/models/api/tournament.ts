export class TournamentsResponse {
    tournaments: Tournament[]
}

export class Tournament {
    id: Number
    Title: String
    image: String
    players_per_teams: Number
    slots: Number
    description: String
    rulebook: String
    check_in_at: Date
    start_date: string
    end_date: string
    type: String
    platforme: String
    round: Number
    round_status: Number
    winner: Object
    created_at: string
    updated_at: string
    nr_tokens: Number
    nr_tokens_to_join: Number
    team_winner: Object
    users_joined: Array<any>
}


export enum TournamentStatus {
    UPCOMING = 0,
    INPROGRESS = 1,
    FINISH = 2,
}