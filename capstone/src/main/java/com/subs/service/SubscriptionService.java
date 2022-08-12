package com.subs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.subs.entity.Subscription;

import com.subs.repository.SubscriptionRepository;

@Service
public class SubscriptionService {

	@Autowired
	SubscriptionRepository subscriptionRepository;

	public void saveSubscription(Subscription s1) {
		subscriptionRepository.save(s1);
	}

	public List<Subscription> printSubscriptions() {
		return subscriptionRepository.findAll();
	}

	public List<Subscription> findAllByUserEmail(String userEmail) {
		return subscriptionRepository.findAllByUserEmail(userEmail);
	}

	public void deleteSub(Subscription s1) {
		subscriptionRepository.delete(s1);
	}

	public void deleteSubById(Integer id) {
		subscriptionRepository.deleteById(id);
	}
	
	public void findSubById(Integer id) {
		subscriptionRepository.findById(id);
	}
	public void editSubInfo(Subscription subscription) {
		Optional<Subscription> found = subscriptionRepository.findById(subscription.getId());
		if (found.isPresent()) {
			Subscription edit = new Subscription();		
			edit.setName(subscription.getName());
			edit.setPlan(subscription.getPlan());
			edit.setCost(subscription.getCost());
			edit.setPaymentDate(subscription.getPaymentDate());
			edit.setCancelLink(subscription.getCancelLink());
			edit.setUserEmail(subscription.getUserEmail());
			subscriptionRepository.deleteById(found.get().getId());
			subscriptionRepository.save(edit);
		}
	
		
	}
}

