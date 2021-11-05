package com.OdkApprenant.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.OdkApprenant.demo.model.Apprenant;
import com.OdkApprenant.demo.repositories.ApprenantRepository;

@Service
public class ApprenantServiceImp implements ApprenantService {
	
	@Autowired
	private ApprenantRepository repository;
	
	public List<Apprenant> listAll(){
		return repository.findAll();
	}
	
	public void save(Apprenant liste_apprenants) {
		repository.save(liste_apprenants);
	}
	
	public Apprenant get(Integer id){
		return repository.findById(id).get();
	}
	
	public void delete(Integer id) {
		repository.deleteById(id);
	}
	
	public Apprenant updateApprenant(Apprenant apprenant) {
		Integer id = apprenant.getId();
		Apprenant app = repository.findById(id).get();
		app.setNom(apprenant.getNom());
		app.setPrenom(apprenant.getPrenom());
		app.setAge(apprenant.getAge());
		app.setEmail(apprenant.getEmail());
		app.setLogin(apprenant.getLogin());
		app.setTelephone(apprenant.getTelephone());
		app.setPassword(apprenant.getPassword());
		app.setApprenantStatus(apprenant.getApprenantStatus());
		app.setGenre(apprenant.getGenre());
		app.setDateCreation(apprenant.getDateCreation());
		app.setDateModification(apprenant.getDateModification());
		return repository.save(app);
	}
	
	public Optional<Apprenant> loginUser(String login, String password) {
		
		return repository.getUserByLoginAndPassword(login, password);
	}

	
	

}
