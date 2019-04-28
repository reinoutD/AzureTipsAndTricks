(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{458:function(e,r,t){"use strict";t.r(r);var o=t(43),i=Object(o.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"docker-registry-vs-docker-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry-vs-docker-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Registry vs. Docker Repository")]),e._v(" "),t("p",[e._v("Last week, we used "),t("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip55.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Compose"),t("OutboundLink")],1),e._v(" to create an image using our existing "),t("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip54.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASP.NET WebAPI project"),t("OutboundLink")],1),e._v(" and push it to Docker Cloud. I also covered deploying it to Azure using "),t("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip56.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web App for Containers"),t("OutboundLink")],1),e._v(". The bit of feedback that I feel that I didn't drive home was the difference between Docker Registry and Docker Repository. I wanted to cover that today.")]),e._v(" "),t("h4",{attrs:{id:"docker-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Registry")]),e._v(" "),t("p",[e._v("Docker Registry is a service that "),t("strong",[e._v("stores")]),e._v(" your docker images, but it could be hosted by a third party and even private if you need so. A couple of examples are:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/container-registry?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Container Registry"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://coreos.com/quay-enterprise/docs/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quay Enterprise"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("There are also other choices such as Google or AWS Container Registry.")]),e._v(" "),t("h4",{attrs:{id:"docker-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Repository")]),e._v(" "),t("p",[e._v("A Docker Repository is a "),t("strong",[e._v("collection")]),e._v(" of related images with same name, that have different tags. Tags are an alphanumeric identifier attached to images within a repository (e.g., 1.1 or latest).")]),e._v(" "),t("p",[e._v("So the command docker "),t("code",[e._v("pull microsoft/aspnetcore:latest")]),e._v(" will download the image tagged "),t("code",[e._v("latest")]),e._v(" within the "),t("code",[e._v("microsoft/aspnetcore")]),e._v(" repository from the Docker Hub registry.")]),e._v(" "),t("p",[e._v("To wrap it up. Look at the image below. We have a Docker Repository named "),t("code",[e._v("microsoft/aspnetcore")]),e._v(" that is stored in a Docker Registry using Docker Hub.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/explaindocker1.png")}}),e._v(" "),t("p",[e._v("We could click on "),t("code",[e._v("tags")]),e._v(" and pull the latest version with "),t("code",[e._v("pull microsoft/aspnetcore:latest")]),e._v(" or version 1.1 with "),t("code",[e._v("pull microsoft/aspnetcore:1.1")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/explaindocker2.png")}})])},[],!1,null,null,null);r.default=i.exports}}]);