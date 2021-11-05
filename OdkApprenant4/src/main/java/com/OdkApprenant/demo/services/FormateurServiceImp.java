package com.OdkApprenant.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.OdkApprenant.demo.model.Apprenant;
import com.OdkApprenant.demo.model.Formateur;
import com.OdkApprenant.demo.repositories.FormateurRepository;

@Service
public class FormateurServiceImp implements FormateurService {
	
	@Autowired
	private FormateurRepository repository;
	
	public List<Formateur> listAll(){
		return repository.findAll();
	}
	
	public void save(Formateur liste_formateurs) {
		repository.save(liste_formateurs);
	}
	
	public Formateur get(Integer id){
		return repository.findById(id).get();
	}
	
	public void delete(Integer id) {
		repository.deleteById(id);
	}
	
	public Formateur updateFormateur(Formateur formateur) {
		Integer id = formateur.getId();
		Formateur app = repository.findById(id).get();
		app.setNom(formateur.getNom());
		app.setPrenom(formateur.getPrenom());
		app.setEmail(formateur.getEmail());
		app.setLogin(formateur.getLogin());
		app.setPassword(formateur.getPassword());
		app.setGenre(formateur.getGenre());
		return repository.save(app);
	}
}
