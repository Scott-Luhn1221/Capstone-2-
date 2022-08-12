package com.subs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.subs.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
	
	@Query("SELECT u FROM User u WHERE u.email=?1 AND u.password=?2")
	User login(String email, String password);

}
