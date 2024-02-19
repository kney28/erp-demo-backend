/* eslint-disable prettier/prettier */
import { ClsService } from 'nestjs-cls';
import { Injectable } from '@nestjs/common'; 

@Injectable()
export class GlobalFuntions {
    
    constructor(
        private readonly cls: ClsService,
    ) {}

    /**
     * La función `Can` comprueba si un usuario tiene permiso para realizar una operación específica.
     * @param {string} permission - Una cadena que representa el código de permiso que debe
     * verificarse. Este código suele ser una combinación del código de función del usuario y el código
     * de permiso específico.
     * @param {string} operation - El parámetro "operación" es una cadena que representa la operación o
     * acción específica para la que desea verificar el permiso. Puede tener los siguientes valores:
     * @returns el valor de la variable "resp".
     */
    Can(permission: string, operation: string) {
        const user = this.cls.get('user')
        // console.log('user: ', user);
        let resp = false;
        if (user) {
            const permiso = user.permissions.filter(function(n){
                return n.code == user.role.code + '-' + permission;
              })[0];
            // console.log(permiso);
            if (operation == 'add') {resp = permiso.add;}
            if (operation == 'modify') {resp = permiso.modify;}
            if (operation == 'record') {resp = permiso.record;}
            if (operation == 'query') {resp = permiso.query;}
            if (operation == 'remove') {resp = permiso.remove;}
            if (operation == 'print') {resp = permiso.print;}
            if (operation == 'confirm') {resp = permiso.confirm;}
            if (operation == 'process') {resp = permiso.process;}
            if (operation == 'run') {resp = permiso.run;}
            if (operation == 'override') {resp = permiso.override;}
        }
        //const user = this.cls.get('user');
        //console.log(user);
        return resp;        
    }
}