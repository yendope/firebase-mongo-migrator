// Description: Generic model
// We will use like transaction model for move the register from one DB to another
class Generic {
  id: string;
  data: any;

  constructor(id: string, data: any) {
    this.id = id;
    this.data = data;
  }
}
