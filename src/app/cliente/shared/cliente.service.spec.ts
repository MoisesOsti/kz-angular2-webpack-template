/**
 * Arquivo de teste do componente ClienteService.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';

describe('Suíte de testes do serviço de cliente', () => {

  let clienteService:ClienteService;
  let cliente: Cliente;
  let cliente2: Cliente;

  beforeEach(() => {
    clienteService = new ClienteService();

    cliente = new Cliente(1234567890123, 'Fulano');
    cliente2 = new Cliente(9876543210123, 'Ciclano');

    delete sessionStorage['clientes'];
  });

  it ('Deve cadastrar um cliente', () => {
    clienteService.cadastrar(cliente);
    let clienteCad = clienteService.buscarPorId(cliente.id);

    expect(clienteCad).toBeDefined();
    expect(clienteCad.id).toEqual(cliente.id);
    expect(cliente.nome).toEqual(cliente.nome); 
  });

  it('Deve listar todos os clientes',()=> {
    clienteService.cadastrar(cliente);
    clienteService.cadastrar(cliente2);

    let clientes: Cliente[] = clienteService.listarTodos();

    expect(clientes).toBeDefined();
    expect(clientes.length).toEqual(2);
    expect(clientes[0].id).toEqual(cliente.id);
    expect(clientes[1].id).toEqual(cliente2.id);
  });
  
});
