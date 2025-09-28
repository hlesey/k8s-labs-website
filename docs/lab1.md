---
sidebar_position: 2
---

# Lab 1: Getting Started with Kubernetes

## Objectives

In this lab, you will:

- Set up a local Kubernetes development environment
- Deploy your first pod
- Understand basic Kubernetes concepts
- Learn to use `kubectl` command-line tool

## Prerequisites

- Docker installed on your machine
- Basic familiarity with command line interface
- Text editor of your choice

## Overview

Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications. In this first lab, we'll explore the fundamental building blocks of Kubernetes.

## Step 1: Verify Kubernetes Installation

First, let's verify that your Kubernetes cluster is running and accessible:

```bash
kubectl cluster-info
kubectl get nodes
```

You should see output showing your cluster information and at least one node in "Ready" status.
## Next Steps

Congratulations! You've deployed your first Kubernetes pod. In [Lab 2](./lab2), we'll explore more advanced concepts like Services and Deployments.

## Additional Resources

- [Kubernetes Pods Documentation](https://kubernetes.io/docs/concepts/workloads/pods/)
- [kubectl Command Reference](https://kubernetes.io/docs/reference/kubectl/)
- [Kubernetes Concepts](https://kubernetes.io/docs/concepts/)
