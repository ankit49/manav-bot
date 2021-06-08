# -*- coding: utf-8 -*-
"""
Created on Mon Jun  7 23:06:06 2021

@author: Nikhil-gola
"""

import networkx as nx
import math
import pickle


def save_pickle(filename,obj):
    file_to_store = open(filename, "wb")
    pickle.dump(obj, file_to_store)
    file_to_store.close()
def load_pickle(filename):
    file_to_read = open(filename, "rb")
    loaded_object = pickle.load(file_to_read)
    file_to_read.close()
    return loaded_object

def onSegment(p,q,r):
    if (p.lon<=min(p.lon,r.lon) and q.lon>= min(p.lon,r.lon)) and (q.lat<=min(p.lat,r.lat) and q.lat >= min(p.lat,r.lat)):
        return True
    else:
        return False
def orientation(p,q,r):
    val = ((q.lat - p.lat) * (r.lon - q.lon)) - ((q.lon-p.lon)*(r.lat-q.lat))
    if val==0:
        return 0
    if val>0:
        return 1
    else:
        return 2
    
def doIntersect(p1,q1,p2,q2):
    o1 = orientation(p1,q1,p2)
    o2 = orientation(p1,q1,q2)
    o3 = orientation(p2,q2,p1)
    o4 = orientation(p2,q2,q1)
    
    if o1!=o2 and o3!=o4:
        return True
    if o1==0 and onSegment(p1,p2,q1):
        return True
    if o2==0 and onSegment(p1,q2,q1):
        return True
    if o3==0 and onSegment(p2,p1,q2):
        return True
    if o4==0 and onSegment(p2,q1,q2):
        return True
    return False

class Node:
    def __init__(self,lat,lon,raw="",name="",ntype=[]):
        self.lat = lat
        self.lon = lon
        self.name = name
        self.hash = (lat,lon)
        self.ntype = ntype
        self.raw = raw
    def getLatitude(self):
        return self.lat
    def getLongitude(self):
        return self.lon
    def get_raw(self):
        return self.raw
    def __repr__(self):
        return ""+str(self.hash)
    
    def __str__(self):
        return ""+str(self.hash)
    
    
class Edge:
    def __init__(self,node1,node2):
        self.node1 = node1
        self.node2 = node2
        self.hash = (str(node1),str(node2))
        self.distance = getDistance(node1,node2)
    def getlinesegment(self):
        return self.node1,self.node2


def get_boundaries(nodes):
    corner_points=[]
    p1,p2,p3,p4 = None,None,None,None
    min_lat,min_lon=100.2,100.2
    max_lat,max_lon=0,0
    for n in nodes:
        node=nodes[n]
        if min_lat>node.getLatitude():
            p1 = node
            min_lat=node.getLatitude()
        if min_lon>node.getLongitude():
            p2 = node
            min_lon=node.getLongitude()
        if max_lat<node.getLatitude():
            p3 = node
            max_lat=node.getLatitude()
        if max_lon<node.getLongitude():
            p4 = node
            max_lon=node.getLongitude()
    corner_points=(p1.getLatitude(),p2.getLongitude(),p3.getLatitude(),p4.getLongitude())
    return corner_points
class GridMaker:
    def __init__(self,min_latitude,min_longitude,max_latitude,max_longitude,split):
        self.min_lat = min_latitude
        self.min_long = min_longitude
        self.max_lat = max_latitude
        self.max_long = max_longitude
        self.split = split
        self.gridSize = split*split
        self.GRID = {}
        self.NameToCor=None
    def name_to_cor(self,nametocor):
        self.NameToCor = nametocor
        
    def loadGrid(self,grid):
        self.GRID=grid
    
    def getMinBoundary(self):
        return [self.min_lat,self.min_long]
    
    def getMaxBoundary(self):
        return [self.max_lat,self.max_long]
    
    def updateSplit(self,new_split):
        self.split=new_split
    
    def getLatStepSize(self):
        diff = self.max_lat-self.min_lat
        return diff/self.split
    
    def getLongStepSize(self):
        diff = self.max_long-self.min_long
        return diff/self.split
    
    def hash_point(self,point):
        latStep = self.getLatStepSize()
        longStep= self.getLongStepSize()
        latDiff = point.getLatitude()-self.min_lat
        longDiff = point.getLongitude()-self.min_long
        row = math.floor(latDiff/latStep)
        col = math.floor(longDiff/longStep)
        cell_id = row*self.split + col
        return cell_id
    def hashedge(self,point):
        latStep = self.getLatStepSize()
        longStep= self.getLongStepSize()
        latDiff = point.getLatitude()-self.min_lat
        longDiff = point.getLongitude()-self.min_long
        row = math.floor(latDiff/latStep)
        col = math.floor(longDiff/longStep)
        cell_id = row*self.split + col
        return row,col,cell_id
    def get_row_col(self,cell_id):
        col=int(cell_id%self.split)
        row=int((cell_id-col)/self.split)
        return row,col
    
    def getCordinatesOfCell(self,cell_id):
        latStep = self.getLatStepSize()
        longStep= self.getLongStepSize()
        col = cell_id%self.split
        row = (cell_id-col)/self.split
        latitude1 = self.min_lat+ row *latStep
        longitude1= self.min_long + col * longStep
        return latitude1,longitude1
    
    def getFourCordinatesOfCell(self,cell_id,edge=False):
        lat,long = self.getCordinatesOfCell(cell_id)
        latStep = self.getLatStepSize()
        longStep= self.getLongStepSize()
        loc1 = Node(lat,long)
        loc2 = Node(lat+latStep,long)
        loc3 = Node(lat,long+longStep)
        loc4 = Node(lat+latStep,long+longStep)
        if edge==True:
            e1=(loc1,loc2)
            e2=(loc1,loc3)
            e3=(loc2,loc4)
            e4=(loc3,loc4)
            return [e1,e2,e3,e4]
        return [loc1,loc2,loc3,loc4]
    def satisfy_boundary(self,node1):
        if (node1.getLatitude()<=self.max_lat and node1.getLatitude()>=self.min_lat) and (node1.getLongitude()<=self.max_long and node1.getLongitude()>=self.min_long):
            return True
        return False
    def getcell_id(self,row,col):
        cell_id = row*self.split + col
        return cell_id
    def validate_cell(self,row,col):
        cell_id = self.getcell_id(row,col)
        if cell_id<0 or cell_id>=(self.split**2):
            return False
        return True
    def instantiate_cell(self):
        c={}
        c['nodes']=[]
        c['roads']=[]
        c['points']=[]
        return c
    def populate_Nodes(self,nodelist):
        for i in nodelist.keys():
            node = nodelist[i]
            if self.satisfy_boundary(node):
                cid = self.hash_point(node)
                if self.GRID.get(cid)==None:
                    self.GRID[cid]=self.instantiate_cell()
                self.GRID[cid]['nodes'].append(node)
            
    def check_valid_neigbour(self,row1,col1,row2,col2):
        #print(self.hashedge(point1),"  ",self.hashedge(point2))
        if self.validate_cell(row1,col1)==False or self.validate_cell(row2,col2)==False:
            return False
        else:
            if abs(row1-row2)>1 and abs(col1-col2)>1:
                return False
        return True
    def get_valid_neigbours(self,cell_id):
        valid_cells=[]
        oprs=[(-1,-1),(-1,0),(-1,1),(0,1),(1,1),(1,0),(1,-1),(0,-1)]
        row,col = self.get_row_col(cell_id)
        for op in oprs:
            nrow = row + op[0]
            ncol = col + op[1]
            if self.check_valid_neigbour(row,col,nrow,ncol):
                valid_cells.append(self.getcell_id(nrow,ncol))
        return valid_cells
    def check_intersection(self,node1,node2,cellid):
        edges = self.getFourCordinatesOfCell(cellid,True)
        for edge in edges:
            node3,node4 = edge
            if doIntersect(node1,node2,node3,node4):
                return True
        return False
            
    def get_intersected_cells(self,node1,node2):
        cellid1 = self.hash_point(node1)
        cellid2 = self.hash_point(node2)
        done={}
        cells=set()
        Q=[]
        Q=[cellid1]
        #print("checking for ",str(node1),"  ",str(node2))
            
        while len(Q)!=0:
            cid = Q.pop(0)
            #print(cid)
            val_nei=[]
            if self.check_intersection(node1,node2,cid):
                cells.add(cid)
                #print(cid," Inter")
                val_nei = self.get_valid_neigbours(cid)
            done[cid]=True
            
            for v in val_nei:
                if done.get(v)==None:
                    Q.append(v)
                else:
                    done[v]=True
        return list(cells)
    def populate_roads(self,edgelist):
        counter=0
        for i in edgelist.keys():
            if counter%100==0:
                print(counter,"/",len(edgelist.keys()))
            counter+=1
            node1,node2 = edgelist[i].getlinesegment()
            if edgelist[i].distance<10000.0:
                cells = self.get_intersected_cells(node1,node2)
                for cid in cells:
                    if self.GRID.get(cid)==None:
                        self.GRID[cid]=self.instantiate_cell()
                    self.GRID[cid]['roads'].append(edgelist[i])
    def getallnewnei(self,points,done):
        newnei = set()
        for k in points.keys():
            if k not in done:
                nei = self.get_valid_neigbours(k)
                for n in nei:
                    if points.get(n)==None:
                        newnei.add(n)
        return list(newnei)
    def cell_satistfy_distance(self,node,cellid,distance):
        nodes=self.getFourCordinatesOfCell(cellid)
        for n in nodes:
            if getDistance(node,n)/1000<=distance:
                return True
        return False
    def grid_scan(self,point,radius,t=None):
        global counter
        done=[]
        points={}
        Q=[]
        cellid = self.hash_point(point)
        Q.append(cellid)
        cids=[]
        counter=0
        while len(Q)>0:
            counter+=1
            cid = Q.pop(0)
            points[cid]=True
            newnei=[]
            if self.cell_satistfy_distance(point,cid,radius):
                newnei = self.getallnewnei(points,done)
                cids.append(cid)
            
            done.append(cid)
            for n in newnei:
                if n not in Q:
                    Q.append(n)
                #points[n]=True
        return cids
    def check_common(self,list1,list2):
            a_set = set(list1)
            b_set = set(list2)
            if len(a_set.intersection(b_set)) > 0:
                return True
            return False
    def get_interested_nodes(self,point,radius,ntype):
        cids = self.grid_scan(point,radius)
        node_list=[]
        for cid in cids:
            if self.GRID.get(cid)!=None:
                nodes = self.GRID[cid]['nodes']
                for node in nodes:
                    if self.check_common(ntype,node.ntype):
                        node_list.append(node)
        return node_list
    def create_graph(self,graph):
        self.graph=graph
    def get_path_distance(self,path,nodes):
        distance = 0.0
        for i in range(1,len(path)):
            distance+=getDistance(nodes[path[i-1]],nodes[path[i]])
        return distance
    def shortest_path_util(self,node1,node2,nodes):
        path = nx.shortest_path(self.graph,node1.get_raw(),node2.get_raw(),weight="length")
        return path,self.get_path_distance(path,nodes)
    def shortest_path(self,node1,node2,nodes,intermediate=[]):
        path=[]
        distance=0.0
        currentNode=node1
        nextNode=None
        for inter in intermediate:
            nextNode=inter
            pa,dis = self.shortest_path_util(currentNode,nextNode,nodes)
            path = path+pa
            distance = distance + dis
            currentNode=inter
        pa,dis = self.shortest_path_util(currentNode,node2,nodes)
        path=path+pa
        distance += dis
        return path,distance

def getDistance(point1,point2):
        radius=6371000 #meters
        dlat = math.radians(point2.lat-point1.lat)
        dlong = math.radians(point2.lon-point1.lon)
        a = math.sin(dlat/2) * math.sin(dlat/2) + math.cos(math.radians(point1.lat)) * math.cos(math.radians(point2.lat)) * math.sin(dlong/2) * math.sin(dlong/2)
        c = 2 * math.atan2(math.sqrt(a),math.sqrt(1-a))
        dist = float(radius * c)
        return dist#