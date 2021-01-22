export interface Database {
    place?: {
        name?: string,
        type?: [{
            name?: string,
            content?: [
                {
                    name?: string,
                    quantity?: [{
                        value: number,
                        expiryDate: string
                    }],
                    volume?: number,
                    unit?: string,
                    img?: string,
                    open?: boolean
                }
            ]
        }]
    }
}