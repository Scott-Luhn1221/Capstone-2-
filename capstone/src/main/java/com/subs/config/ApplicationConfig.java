package com.subs.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@Configuration
@EntityScan(basePackages ="com.subs.entity")
@EnableJpaRepositories(basePackages ="com.subs.repository")
public class ApplicationConfig {

}
