export type PostMetadata = {
    title: string
    description: string
    posted: Date
    tags: string[]
    slug?: string
}

export type PostData = {
    metadata: PostMetadata,
    content: string
}
