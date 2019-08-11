import { DB } from '../db/db';
import { QueryResult } from 'pg';

class TourDAO {
  public static db: DB;

  public static init(params: {
    readonly db: DB;
  }): void {
    this.db = params.db;
  }

  public static async getTourById(id: number): Promise<QueryResult> {
    const query = `
      SELECT  id, min_seats, max_seats, price, length_min, active, title, slug FROM tours
      WHERE id = $1
    `;

    return await  this.db.pool.query(query, [id]);
  }

  public static async getTourBySlug(slug: string): Promise<QueryResult> {
    const query = `
      SELECT id, min_seats, max_seatss, price, length_min, active, title FROM tours
      WHERE slug = $1
    `;

    return await this.db.pool.query(query, [slug]);
  }

  public static async getAllTours(): Promise<QueryResult> {
    const query = `
      SELECT id, min_seats, max_seats, price, length_min, active, title, title_image, summary, slug, categories FROM tours 
        ORDER BY title
    `;

    return await this.db.pool.query(query);

  }

  public static async getAllToursByCategory(category: string): Promise<QueryResult> {
    const query = `
      SELECT id, min_seats, max_seats, price, length_min, active, title, title_image, summary, slug, categories FROM tours WHERE $1 <@ categories 
        AND active = TRUE 
        ORDER BY title
    `;

    return await this.db.pool.query(query, [category]);
  }
}

export {
  TourDAO
};
