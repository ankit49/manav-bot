# -*- coding: utf-8 -*-
"""
Created on Mon Jun  7 23:38:48 2021

@author: Nikhil-office
"""

from support import *

from flask import Flask, request, render_template

grid = load_pickle("data/grid.pkl")
nodes = load_pickle("data/nodes.pkl")

app = Flask(__name__,template_folder='templates')


@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/find', methods = ['POST'])
def find():
    lat1 = float(request.form.get('lat1'))
    lat2 = float(request.form.get('lat2'))
    long1 = float(request.form.get('long1'))
    long2 = float(request.form.get('long2'))
    ty = request.form.get('type')
    ty="road"
    n1 = Node(lat1,long1)
    n2 = Node(lat2,long2)
    l=grid.get_interested_nodes(n1,0.2,[ty])
    n1 = l[0]
    l=grid.get_interested_nodes(n2,0.2,[ty])
    n2 = l[0]
    
    path,dis = grid.shortest_path(n1,n2,nodes)
    pa =[]
    for p in path:
        pa.append([p[0],p[1]])
    return str(pa)    
    
def load_grid():
    global grid
    grid = load_pickle("grid.pkl")

if __name__ == '__main__':
    app.run(debug=True)
