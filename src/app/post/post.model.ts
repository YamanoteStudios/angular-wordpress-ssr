// This interface helps typescript know what the response will
// look like when we get it back from the service


export interface IPost {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    date: Date;
    slug: string;
}