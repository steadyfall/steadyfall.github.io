export type PostMetadata = {
    title?: string
    description?: string
    date?: string
    tags?: string[]
    slug: string
}

export type PostData = {
    metadata: PostMetadata,
    content: string
}
