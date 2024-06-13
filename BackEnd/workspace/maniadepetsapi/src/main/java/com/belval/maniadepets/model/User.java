package com.belval.maniadepets.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class User {
	
	//Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "User_id") 
	private Integer UserId;
	
	@Column(name = "User_name")
	private String UserName;
	
	@Column(name = "User_senha")
	private String UserSenha;
	
	@Column(name = "User_Email")
	private String UserEmail;
	
	@Column(name = "User_Nasc")
	//@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	//@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private String UserNasc;
	
	@Column(name = "User_Genero")
	private String UserGenero;
	
	//Método construtor padrão, isto é, sem parâmetros
	public User() {
		
	}

	public User(Integer userId, String userName, String userSenha, String userEmail, String userNasc, String userGenero) {
		super();
		UserId = userId;
		UserName = userName;
		UserSenha = userSenha;
		UserEmail = userEmail;
		UserNasc = userNasc;
		UserGenero = userGenero;
	}

	public Integer getUserId() {
		return UserId;
	}

	public void setUserId(Integer userId) {
		UserId = userId;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getUserSenha() {
		return UserSenha;
	}

	public void setUserSenha(String userSenha) {
		UserSenha = userSenha;
	}

	public String getUserEmail() {
		return UserEmail;
	}

	public void setUserEmail(String userEmail) {
		UserEmail = userEmail;
	}

	public String getUserNasc() {
		return UserNasc;
	}

	public void setUserNasc(String userNasc) {
		UserNasc = userNasc;
	}

	public String getUserGenero() {
		return UserGenero;
	}

	public void setUserGenero(String userGenero) {
		UserGenero = userGenero;
	}

	@Override
	public int hashCode() {
		return Objects.hash(UserId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(UserId, other.UserId);
	}




	
	
	
	
}
