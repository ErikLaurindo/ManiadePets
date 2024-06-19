package com.belval.maniadepets.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Info_Pet")
public class InfoPet {
	
	//Atributos
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "Pet_Id") 
	private Integer PetId;
	
	@Column(name = "Inf_Especie")
	private String infespecie;
	
	@Column(name = "Inf_Raca")
	private String infaca;
	
	@Column(name = "Inf_Cor")
	private String infcor;
	
	@Column(name = "Inf")
	private String inf;
	
	@Column(name = "Inf_DataNasc")
	private String infdatanasc;
	
	//Método construtor padrão, isto é, sem parâmetros
		public InfoPet() {
		
		
			
		}

		public InfoPet(Integer petId, String infespecie, String infaca, String infcor, String inf, String infdatanasc) {
		super();
		PetId = petId;
		this.infespecie = infespecie;
		this.infaca = infaca;
		this.infcor = infcor;
		this.inf = inf;
		this.infdatanasc = infdatanasc;
	}

		public Integer getPetId() {
			return PetId;
		}

		public void setPetId(Integer petId) {
			PetId = petId;
		}

		public String getInfespecie() {
			return infespecie;
		}

		public void setInfespecie(String infespecie) {
			this.infespecie = infespecie;
		}

		public String getInfaca() {
			return infaca;
		}

		public void setInfaca(String infaca) {
			this.infaca = infaca;
		}

		public String getInfcor() {
			return infcor;
		}

		public void setInfcor(String infcor) {
			this.infcor = infcor;
		}

		public String getInf() {
			return inf;
		}

		public void setInf(String inf) {
			this.inf = inf;
		}

		public String getInfdatanasc() {
			return infdatanasc;
		}

		public void setInfdatanasc(String infdatanasc) {
			this.infdatanasc = infdatanasc;
		}

		@Override
		public int hashCode() {
			return Objects.hash(PetId, inf, infaca, infcor, infdatanasc, infespecie);
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			InfoPet other = (InfoPet) obj;
			return Objects.equals(PetId, other.PetId) && Objects.equals(inf, other.inf)
					&& Objects.equals(infaca, other.infaca) && Objects.equals(infcor, other.infcor)
					&& Objects.equals(infdatanasc, other.infdatanasc) && Objects.equals(infespecie, other.infespecie);
		}
		
}
		

	
	
	
	
	
	
	
	

	
