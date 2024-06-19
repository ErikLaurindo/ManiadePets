package com.belval.maniadepets.controller;

<<<<<<< HEAD:BackEnd/workspace/maniadepetsapi/src/main/java/com/belval/maniadepets/controller/UserController.java

import java.util.Optional;

=======
>>>>>>> ccaa3b2 (atualização de api(concluido)):BackEnd/workspace/maniadepetsapi/src/main/java/com/belval/maniadepets/controller/ProdutoController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

<<<<<<< HEAD:BackEnd/workspace/maniadepetsapi/src/main/java/com/belval/maniadepets/controller/UserController.java
import com.belval.maniadepets.model.User;
=======
import com.belval.maniadepets.model.InfoPet;
import com.belval.maniadepets.model.User;
import com.belval.maniadepets.repository.InfoPetRepository;
>>>>>>> ccaa3b2 (atualização de api(concluido)):BackEnd/workspace/maniadepetsapi/src/main/java/com/belval/maniadepets/controller/ProdutoController.java
import com.belval.maniadepets.repository.UserRepository;


@RestController
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
<<<<<<< HEAD:BackEnd/workspace/maniadepetsapi/src/main/java/com/belval/maniadepets/controller/UserController.java

	@GetMapping("/users")
	public ResponseEntity<Iterable<User>> obterUser() {
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(userRepository.findAll());
=======
	
	@Autowired
	private InfoPetRepository infopetRepository;
	
	//@Autowired
	//private ProdutoRepository produtoRepository;
	

	static {
//		Produto prod = new Produto(1, "Pão", "Pão Francês", 0.5);
//		listaProdutos.add(prod);
	}
	
	@PostMapping("/User") 
	public ResponseEntity<String> obterUser(@RequestBody User user ) {
		userRepository.save(user);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body( "Sucesso");
	}
		
	
	@GetMapping("/InfoPet")
		public ResponseEntity<Iterable<InfoPet>> obterInfoPet() {
			return ResponseEntity
					.status(HttpStatus.OK)
					.body( infopetRepository.findAll());
>>>>>>> ccaa3b2 (atualização de api(concluido)):BackEnd/workspace/maniadepetsapi/src/main/java/com/belval/maniadepets/controller/ProdutoController.java
	}
	
	//curl POST http://localhost:8080/users -H "Content-Type: application/json; Charset=utf-8" -d @user1.json

	@PostMapping("/users")
	public ResponseEntity<User> criarProduto(@RequestBody User user) {
		
		userRepository.save(user);
		
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(user);
	}
	
	//curl GET http://localhost:8080/users/1
	@GetMapping("/users/{id}")
	public ResponseEntity<Object> buscarProdutoPorId(@PathVariable Integer id) {
		
		Optional<User> produto = userRepository.findById(id);
		
		if(!produto.isPresent()) {
			return ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body("Usuário não encontrado.");
		}
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(produto.get());
	}
	
	//curl -X DELETE http://localhost:8080/users/1
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Object> apagar(@PathVariable Integer id) {
		
		//ALT+SHIFT+R -> renomeia todas as ocorrências da variável/metodo/classe
		Optional<User> user = userRepository.findById(id);
		
		if(!user.isPresent()) {
			return ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body("Usuário não encontrado.");
		}
		
		userRepository.delete(user.get());
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("Usuário apagado com sucesso!");	
	}
	
	//Observação: para métodos que não sejam o GET e o POST é necessário colocar o -X(menos xis maiúsculo)
	//curl -X PUT http://localhost:8080/users/1 -H "Content-Type: application/json; Charset=utf-8" -d @user1.json
	@PutMapping("/users/{id}")
	public ResponseEntity<Object> atualizarProduto(
			@PathVariable(value = "id")Integer id,
			@RequestBody User produto) {
		
		Optional<User> produtoEncontrado = userRepository.findById(id);
		
		if (produtoEncontrado.isEmpty()) {
			return ResponseEntity
					.status(HttpStatus.NOT_FOUND)
					.body("Usuário não encontrado.");
		}
		
		produto.setUserId(id);
		userRepository.save(produto);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("Usuário atualizado com sucesso.");
	}
}
