---
sidebar_position: 3
---

# Lab 2: Services and Deployments

## Objectives

In this lab, you will:

- Create and manage Kubernetes Deployments
- Understand the relationship between Pods and Deployments
- Create and configure Services for networking
- Scale applications up and down
- Perform rolling updates

## Prerequisites

- Completion of [Lab 1](./lab1)
- Access to a Kubernetes cluster
- kubectl command-line tool configured

## Overview

While Pods are the basic unit of deployment in Kubernetes, in production you'll typically use higher-level objects like Deployments and Services. Deployments provide declarative updates and scaling capabilities, while Services provide stable networking endpoints.

## Troubleshooting

**Pods not starting?**
- Check the deployment status: `kubectl describe deployment <name>`
- Look at pod events: `kubectl describe pod <pod-name>`

**Service not reachable?**
- Verify service endpoints: `kubectl get endpoints`
- Check service selector matches pod labels
- Ensure pods are in Running state

## Key Concepts Learned

- **Deployments** provide declarative updates and scaling
- **Services** provide stable network endpoints for pods
- **Labels and Selectors** connect services to pods
- **Rolling Updates** allow zero-downtime deployments

## Next Steps

In the next lab, we'll explore ConfigMaps and Secrets for managing application configuration and sensitive data.

## Additional Resources

- [Deployments Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Services Documentation](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Rolling Updates](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/)
