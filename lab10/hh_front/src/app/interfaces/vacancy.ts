export interface Vacancy {
    id?: number;
    name: string;
    description: string;
    salary: number;
    company: number; // For POST/PUT - just the ID
}
