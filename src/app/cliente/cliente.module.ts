/**
 * Arquivo de configuração do módulo.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
	ClienteCadastrarComponent,
	ClienteEditarComponent,
	ClienteListarComponent,
	ClienteVisualizarComponent,
	ClienteService
} from './';
import { SharedModule } from '../shared';
import { ClienteIdPipe } from './shared/cliente-id.pipe';

@NgModule({
	imports: [ 
		RouterModule,
		SharedModule
	],
	declarations: [
		ClienteCadastrarComponent,
		ClienteEditarComponent,
		ClienteListarComponent,
		ClienteVisualizarComponent,
		ClienteIdPipe
	],
	providers: [
		ClienteService
	]
})
export class ClienteModule {}
