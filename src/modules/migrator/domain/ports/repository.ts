interface ConsumerRepository {
    GetUsers(): Promise<any>
    GetDataByEntityName(entity: string): Promise<any>
}
interface ReciverRepository {
    SaveUsers(data: any): Promise<any>
    SaveDataByEntityName(entity: string, data: any): Promise<any>
}