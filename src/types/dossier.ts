export interface ImpactTable {
  headers: string[];
  rows: string[][];
}

export interface Dossier {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  status: string;
  heroImages: string[];
  context: string;
  challenge: string;
  concept: string;
  execution: string[];
  impactTable: ImpactTable;
  advantage: string;
}
