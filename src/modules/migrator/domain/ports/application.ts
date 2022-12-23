export interface Application {
    MigrateEntity(entity: string): Promise<any>
    MigrateUser(): Promise<any>
}