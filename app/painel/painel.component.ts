import { Component, Input } from '@angular/core';

@Component ({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent {

    @Input() titulo: string;

    ngOnInit(){
        this.titulo = this.titulo.length > 10 ? this.titulo.substr(0,10)+'...' : this.titulo;
    }
}