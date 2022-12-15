function addToCart(item) {
    // Vérifier si le panier est déjà créé
    if (localStorage.getItem('cart') == null) {
        // Si le panier n'existe pas encore, le créer
        var cart = [];
        // Ajouter l'article au panier
        cart.push(item);
        // Enregistrer le panier dans le stockage local
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        // Si le panier existe déjà, récupérer les articles existants
        var cart = JSON.parse(localStorage.getItem('cart'));
        // Ajouter l'article au panier
        cart.push(item);
        // Enregistrer le panier modifié dans le stockage local
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

// Ce script utilise le stockage local pour enregistrer les articles du panier. Chaque fois qu'un article est ajouté au panier, il est ajouté à un tableau qui est ensuite enregistré dans le stockage local. Si le panier n'existe pas encore, il est créé avant d'ajouter l'article.
// Pour utiliser ce script, il suffit d'appeler la fonction addToCart() en lui passant l'article à ajouter au panier en tant qu'argument. Par exemple :

addToCart({ id: 1, name: 'Plante1', price: 10 });

// Cela ajoutera un article avec l'ID 1, le nom "Plante1" et le prix 10 € au panier.

// Pour afficher la panier :

var cart = getCart();
console.log(cart);

// Supprimer un article : 

function removeFromCart(itemId) {
    // Vérifier si le panier existe
    if (localStorage.getItem('cart') == null) {
        // Si le panier n'existe pas, retourner un message d'erreur
        return 'Le panier est vide';
    } else {
        // Si le panier existe, récupérer les articles enregistrés dans le stockage local
        var cart = JSON.parse(localStorage.getItem('cart'));
        // Trouver l'index de l'article à supprimer dans le panier
        var index = -1;
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id == itemId) {
                index = i;
                break;
            }
        }
        // Vérifier si l'article a été trouvé dans le panier
        if (index == -1) {
            // Si l'article n'a pas été trouvé, retourner un message d'erreur
            return 'L\'article n\'existe pas dans le panier';
        } else {
            // Si l'article a été trouvé, le supprimer du panier
            cart.splice(index, 1);
            // Enregistrer le panier modifié dans le stockage local
            localStorage.setItem('cart', JSON.stringify(cart));
            // Retourner une confirmation de la suppression
            return 'L\'article a été supprimé du panier';
        }
    }
}

// Ce script vérifie si le panier existe dans le stockage local. Si le panier n'existe pas, il retourne un message d'erreur indiquant que le panier est vide. Si le panier existe, il récupère les articles enregistrés dans le stockage local et cherche l'article à supprimer en fonction de son ID. Si l'article est trouvé, il est supprimé du panier et le panier modifié est enregistré dans le stockage local. Si l'article n'est pas trouvé, un message d'erreur est retourné.
// Pour utiliser ce script, il suffit d'appeler la fonction removeFromCart() en lui passant l'ID de l'article à supprimer du panier en tant qu'argument. Par exemple :

var result = removeFromCart(1);
console.log(result);

// Cela supprimera l'article avec l'ID 1 du panier et affichera un message de confirmation de la suppression dans la console.