export interface Controller {
    MigrateEntity(entity: string): Promise<any>
    MigrateUsers(): Promise<any>
}