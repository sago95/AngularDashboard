package com.OdkApprenant.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.OdkApprenant.demo.model.Liste;
import com.OdkApprenant.demo.repositories.ListeRepository;

@Service
public class ListeServiceImp implements ListeService {
	
	@Autowired
	private ListeRepository repo;
	
	public List<Liste> listAll(){
		return repo.findAll();
	}
	
	public void save(Liste liste_presence) {
		repo.save(liste_presence);
	}
	

}
