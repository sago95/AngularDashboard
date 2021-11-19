package com.OdkApprenant.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.OdkApprenant.demo.model.Apprenant;

@Service
public interface ApprenantService {
	
	 void save(Apprenant liste_apprenants);
		
	 List<Apprenant> listAll();
		
	 Apprenant get(Integer id);
		
	 void delete(Integer id);
	 
	 Optional<Apprenant> loginUser(String login, String password);

	Apprenant updateApprenant(Apprenant apprenant);
	
	Optional<Apprenant> findById(Integer id);

}
