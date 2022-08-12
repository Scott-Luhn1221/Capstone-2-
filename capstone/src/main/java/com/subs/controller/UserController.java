package com.subs.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.subs.entity.Subscription;
import com.subs.entity.User;
import com.subs.service.SubscriptionService;
import com.subs.service.UserService;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	SubscriptionService subscriptionService;

	// POSTMAN SOA
	@RequestMapping(value = "/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void submitUserDetails(@RequestBody User user) {
		userService.saveUser(user);

	}

	// POSTMAN SOA
	@RequestMapping(value = "/findByEmail", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Optional<User>> findByEmail(String email) {
		Optional<User> findUser = userService.findByEmail(email);
		try {
			if (findUser.isPresent()) {
				return new ResponseEntity<>(findUser, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

		}
	}

	@RequestMapping(value = "/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public ResponseEntity<User> loginHandler(@RequestBody User user) {
		User login = userService.loginUser(user);
		try {
			if (!login.equals(null)) {
				return new ResponseEntity<>(login, HttpStatus.OK);
			}

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return null;
	}

	@RequestMapping(value = "/deleteByEmail", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Optional<User>> deleteByEmail(String email) {
		userService.deleteUserByEmail(email);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	// POSTMAN SOA
	@RequestMapping(value = "/savesub", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public void submitSubscriptionDetails(@RequestBody Subscription subscription) {
		subscriptionService.saveSubscription(subscription);

	}

	// POSTMAN SOA
	@RequestMapping(value = "/findAllSubs", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<List<Subscription>> findAll() {
		try {
			List<Subscription> allSubscription = subscriptionService.printSubscriptions();
			return new ResponseEntity<List<Subscription>>(allSubscription, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	@DeleteMapping("/deleteSub/{id}")
	public ResponseEntity<Integer> deleteSubscription(@PathVariable Integer id) {
		subscriptionService.deleteSubById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	{

	}

	@RequestMapping(value = "/findAllSubsByEmail", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
	public ResponseEntity<List<Subscription>> findAllByUserEmail(@RequestParam String userEmail) {
		try {
			List<Subscription> allSubscriptionByUserEmail = subscriptionService.findAllByUserEmail(userEmail);
			return new ResponseEntity<List<Subscription>>(allSubscriptionByUserEmail, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

	}
	
	@RequestMapping(value = "/editSubInfo", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public ResponseEntity<Subscription> editHandler(@RequestParam(name ="id", required = true) Subscription subscription) {
		subscriptionService.editSubInfo(subscription);
		return new ResponseEntity<>(HttpStatus.OK);

}
	
	@RequestMapping(value = "/editUserInfo", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
	public ResponseEntity<User> editHandler(@RequestBody User user) {
		userService.editUserInfo(user);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
