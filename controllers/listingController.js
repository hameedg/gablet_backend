const PropertyListing = require('../models/propertyModel');

exports.getAllProperties = async (req, res) => {
    try {
        const properties = await PropertyListing.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: "Error fetching properties", error });
    }
};

exports.getPropertyById = async (req, res) => {
    try {
        const property = await PropertyListing.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: "Error fetching property", error });
    }
};

exports.createProperty = async (req, res) => {
    const { image, title, description, price } = req.body;

    try {
        const newProperty = new PropertyListing({ image, title, description, price });
        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).json({ message: "Error creating property", error });
    }
};

exports.updateProperty = async (req, res) => {
    const { image, title, description, price } = req.body;

    try {
        const updatedProperty = await PropertyListing.findByIdAndUpdate(
            req.params.id,
            { image, title, description, price },
            { new: true, runValidators: true }
        );
        if (!updatedProperty) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.status(200).json(updatedProperty);
    } catch (error) {
        res.status(500).json({ message: "Error updating property", error });
    }
};

exports.deleteProperty = async (req, res) => {
    try {
        const deletedProperty = await PropertyListing.findByIdAndDelete(req.params.id);
        if (!deletedProperty) {
            return res.status(404).json({ message: "Property not found" });
        }
        res.status(200).json({ message: "Property deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting property", error });
    }
};
