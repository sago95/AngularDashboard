package com.OdkApprenant.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.OdkApprenant.demo.model.Formateur;

@Service
public interface FormateurService {
	
	List<Formateur> listAll();
	
	 Formateur get(Integer id);
		
	 void delete(Integer id);
	

	void save(Formateur liste_formateurs);

	Formateur updateFormateur(Formateur formateur);

}
