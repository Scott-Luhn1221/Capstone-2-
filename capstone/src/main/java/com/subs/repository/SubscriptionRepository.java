package com.subs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.subs.entity.Subscription;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Integer> {
	
	List<Subscription> findAllByUserEmail(String userEmail);
	

}
