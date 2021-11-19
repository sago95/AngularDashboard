package com.OdkApprenant.demo.model;

import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Liste {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private LocalDate date = LocalDate.now();
	
	private LocalTime heure_arrive_apprenant = LocalTime.now();
	
	private LocalTime heure_depart_apprenant = LocalTime.now();
	
	private String  nom;
	private String prenom;
	private String nid;
	
	
	public Liste(Integer id, LocalDate date, LocalTime heure_arrive_apprenant, LocalTime heure_depart_apprenant, String nom,
			String prenom, String nid) {
		this.id = id;
		this.date = date;
		this.heure_arrive_apprenant = heure_arrive_apprenant;
		this.heure_depart_apprenant = heure_depart_apprenant;
		this.nom = nom;
		this.prenom = prenom;
		this.nid = nid;
		
	}

	public String getNid() {
		return nid;
	}

	public void setNid(String nid) {
		this.nid = nid;
	}

	public Liste () {}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getHeure_arrive_apprenant() {
		return heure_arrive_apprenant;
	}
	public void setHeure_arrive_apprenant(LocalTime heure_arrive_apprenant) {
		this.heure_arrive_apprenant = heure_arrive_apprenant;
	}
	
	public LocalTime getHeure_depart_apprenant() {
		return heure_depart_apprenant;
	}
	public void setHeure_depart_apprenant(LocalTime heure_depart_apprenant) {
		this.heure_depart_apprenant = heure_depart_apprenant;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	
}
