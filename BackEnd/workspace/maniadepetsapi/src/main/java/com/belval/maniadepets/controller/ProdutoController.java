package com.belval.maniadepets.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.belval.maniadepets.model.Produto;
import com.belval.maniadepets.model.User;
import com.belval.maniadepets.repository.ProdutoRepository;
import com.belval.maniadepets.repository.UserRepository;

@RestController
public class ProdutoController {

//	private static List<Produto> listaProdutos = new ArrayList<>();
//	private static Integer proxId = 1;
	
//	private static ProdutoRepository repository = 
//			new ProdutoRepository();
	@Autowired
	private UserRepository userRepository;
	
	//@Autowired
	//private ProdutoRepository produtoRepository;
	

	static {
//		Produto prod = new Produto(1, "Pão", "Pão Francês", 0.5);
//		listaProdutos.add(prod);
	}
	
	@GetMapping("/User")
	public ResponseEntity<Iterable<User>> obterUser() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body( userRepository.findAll());
	}

	//curl POST http://localhost:8080/produtos -H "Content-Type: application/json; Charset=utf-8" -d @produto-mortadela.json
	/*
	@PostMapping("/User")
	public ResponseEntity<Produto> criarProduto(@RequestBody Produto produto) {
		
		produtoRepository.save(produto);
		
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(produto);
	}
	
	//curl GET http://localhost:8080/produtos/1
	@GetMapping("/User/{id}")
	public ResponseEntity<Object> buscarProdutoPorId(@PathVariable Integer id) {
		
		Optional<Produto> produto = produtoRepository.findById(id);
		
		if(!produto.isPresent()) {
			return ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body("Produto não encontrado.");
		}
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(produto.get());
	}
	
	//curl -X DELETE http://localhost:8080/produtos/1
	@DeleteMapping("/User/{id}")
	public ResponseEntity<Object> apagar(@PathVariable Integer id) {
		
		
		Optional<Produto> produto = produtoRepository.findById(id);
		
		if(!produto.isPresent()) {
			return ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body("Produto não encontrado.");
		}
		
		produtoRepository.delete(produto.get());
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("Produto apagado com sucesso!");	
	}
	
	//Observação: para métodos que não sejam o GET e o POST é necessário colocar o -X(menos xis maiúsculo)
	//curl -X PUT http://localhost:8080/produtos/1 -H "Content-Type: application/json; Charset=utf-8" -d @produto-mortadela2.json
	@PutMapping("/User/{id}")
	public ResponseEntity<Object> atualizarProduto(
			@PathVariable(value = "id")Integer id,
			@RequestBody Produto produto) {
		
		Optional<Produto> produtoEncontrado = repository.findById(id);
		
		if (produtoEncontrado.isEmpty()) {
			return ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body("Produto não encontrado.");
		}
		
		produto.setId(id);
		repository.save(produto);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("Produto atualizado com sucesso.");
	}
	*/
}
