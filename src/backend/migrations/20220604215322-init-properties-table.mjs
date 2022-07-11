import { Kysely } from 'kysely'

const table = 'properties'

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  await db.schema
    .createTable(table)
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('property_id', 'varchar')
    .addColumn('status', 'varchar', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo('now()'))
    .addColumn('updated_at', 'timestamp')
    .execute()

  await db.schema
    .createIndex(`${table}_property_id_index`)
    .on(table)
    .column('property_id')
    .execute()
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
  await db.schema.dropIndex(`${table}_name_index`).execute()
  await db.schema.dropTable(table).execute()
}
