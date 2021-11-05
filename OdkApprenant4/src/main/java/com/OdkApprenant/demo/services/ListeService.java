package com.OdkApprenant.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.OdkApprenant.demo.model.Liste;

@Service
public interface ListeService {
	
	List<Liste> listAll();
	void save(Liste liste_presence);

}
