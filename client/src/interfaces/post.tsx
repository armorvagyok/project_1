export interface Post{
    id: number,
    user: string,
    title: string,
    text: string,
    tags: Array<string>,
    url: string
}