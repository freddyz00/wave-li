export type User = {
    id: number,
    first_name: string,
    picture: string
}

export type Event = {
    id: number,
    title: string,
    description: string,
    location: string,
    start_timestamp: string,
    end_timestamp: string,
    picture: string,
    num_interested: number,
    num_attending: number,
    category: string,
    interested: User[],
    attending: User[],
}