package com.OdkApprenant.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import java.util.Date;

@Entity
public class Liste {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Temporal(TemporalType.DATE)
	private Date date;
	
	@Temporal(TemporalType.TIME)
	private Date heure_arrive_apprenant;
	
	@Temporal(TemporalType.TIME)
	private Date heure_depart_apprenant;
	
	private String  nom_apprenant;
	private String prenom_apprenant;
	
	
	
	public Liste( Date date, Date heure_arrive_apprenant, Date heure_depart_apprenant, String nom_apprenant, String prenom_apprenant) {
		
		this.date = date;
		this.heure_arrive_apprenant = heure_arrive_apprenant;
		this.heure_depart_apprenant = heure_depart_apprenant;
		this.nom_apprenant = nom_apprenant;
		this.prenom_apprenant = prenom_apprenant;
	}
	
	public Liste () {}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Date getHeure_arrive_apprenant() {
		return heure_arrive_apprenant;
	}
	public void setHeure_arrive_apprenant(Date heure_arrive_apprenant) {
		this.heure_arrive_apprenant = heure_arrive_apprenant;
	}
	
	public Date getHeure_depart_apprenant() {
		return heure_depart_apprenant;
	}
	public void setHeure_depart_apprenant(Date heure_depart_apprenant) {
		this.heure_depart_apprenant = heure_depart_apprenant;
	}
	public String getNom_apprenant() {
		return nom_apprenant;
	}
	public void setNom_apprenant(String nom_apprenant) {
		this.nom_apprenant = nom_apprenant;
	}
	public String getPrenom_apprenant() {
		return prenom_apprenant;
	}
	public void setPrenom_apprenant(String prenom_apprenant) {
		this.prenom_apprenant = prenom_apprenant;
	}

	
}
